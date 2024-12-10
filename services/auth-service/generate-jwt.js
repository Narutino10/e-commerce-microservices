import jwt from 'jsonwebtoken';
console.log("Le script s'exécute...");

// Clé secrète
const secretKey = process.env.JWT_SECRET || "efrei_super_pass";

// Fonction pour générer un token
function generateToken(userId, email) {
    const payload = {
        userId: userId,
        email: email,
    };

    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

// Test : Exécuter le fichier directement
if (import.meta.url === `file://${process.argv[1]}`) {
    const token = generateToken("1", "iouahabi1@myges.fr");
    console.log("Votre token JWT :", token);
}

export default generateToken;
