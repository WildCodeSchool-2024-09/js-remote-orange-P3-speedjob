INSERT INTO user (
    firstname,
    lastname,
    login,
    password,
    email,
    isAdmin,
    role
) 
VALUES 
    ('John', 'Doe', 'johndoe123', 'password123', 'john.doe@example.com', TRUE, FALSE),
    ('Alice', 'Smith', 'alicesmith', 'password456', 'alice.smith@example.com', FALSE, TRUE),
    ('Bob', 'Johnson', 'bobjohnson', 'password789', 'bob.johnson@example.com', FALSE, FALSE),
    ('Emma', 'Wilson', 'emmawilson', 'password101', 'emma.wilson@example.com', TRUE, FALSE),
    ('David', 'Brown', 'davidbrown', 'password102', 'david.brown@example.com', FALSE, TRUE);