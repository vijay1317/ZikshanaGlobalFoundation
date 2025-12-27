#!/bin/bash

# Password Hash Generator for Admin User
# This script helps generate BCrypt password hashes

echo "=========================================="
echo "🔐 Admin Password Hash Generator"
echo "=========================================="
echo ""

# Check if Java is available
if ! command -v java &> /dev/null; then
    echo "❌ Java is not installed. Please install Java to use this script."
    echo ""
    echo "Alternative: Use online BCrypt generator"
    echo "Visit: https://bcrypt-generator.com/"
    echo "Use 10 rounds for the hash"
    exit 1
fi

# Check if we're in the backend directory
if [ ! -f "backend/pom.xml" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

echo "This script will generate a BCrypt hash for your admin password."
echo ""

# Prompt for password
read -s -p "Enter the password for admin user: " PASSWORD
echo ""
read -s -p "Confirm password: " PASSWORD_CONFIRM
echo ""

if [ "$PASSWORD" != "$PASSWORD_CONFIRM" ]; then
    echo "❌ Passwords don't match!"
    exit 1
fi

if [ ${#PASSWORD} -lt 8 ]; then
    echo "❌ Password must be at least 8 characters long!"
    exit 1
fi

echo ""
echo "Generating BCrypt hash..."
echo ""

# Create temporary Java file
cat > /tmp/GeneratePassword.java <<'EOF'
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class GeneratePassword {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Please provide password as argument");
            System.exit(1);
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String password = args[0];
        String hash = encoder.encode(password);
        System.out.println("BCrypt Hash:");
        System.out.println(hash);
    }
}
EOF

# Compile and run using backend's dependencies
cd backend

# Use Maven to generate the hash
mvn exec:java \
    -Dexec.mainClass="org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder" \
    -Dexec.args="$PASSWORD" \
    -q 2>/dev/null || {

    # Alternative: Create a simple Spring Boot class
    cat > src/main/java/org/zikshana/util/PasswordGenerator.java <<EOF
package org.zikshana.util;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("ERROR: Please provide password");
            System.exit(1);
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String hash = encoder.encode(args[0]);
        System.out.println("BCRYPT_HASH:" + hash);
    }
}
EOF

    # Compile the project first
    echo "Compiling backend..."
    ./mvnw clean compile -q -DskipTests

    # Run the password generator
    HASH=$(./mvnw exec:java \
        -Dexec.mainClass="org.zikshana.util.PasswordGenerator" \
        -Dexec.args="$PASSWORD" \
        -q 2>/dev/null | grep "BCRYPT_HASH:" | cut -d: -f2-)

    # Clean up
    rm -f src/main/java/org/zikshana/util/PasswordGenerator.java
}

cd ..

if [ -z "$HASH" ]; then
    echo "❌ Failed to generate hash."
    echo ""
    echo "Please use an online BCrypt generator:"
    echo "1. Visit: https://bcrypt-generator.com/"
    echo "2. Enter your password: $PASSWORD"
    echo "3. Set rounds to: 10"
    echo "4. Copy the generated hash"
    echo ""
    exit 1
fi

echo "=========================================="
echo "✅ Password Hash Generated Successfully!"
echo "=========================================="
echo ""
echo "Your BCrypt hash is:"
echo ""
echo "$HASH"
echo ""
echo "Use this hash to create admin user:"
echo ""
echo "SQL Command:"
echo "UPDATE users SET password = '$HASH' WHERE email = 'admin@zikshana.org';"
echo ""
echo "Or update the create-admin-user.sql file with this hash."
echo ""

# Cleanup
rm -f /tmp/GeneratePassword.java
