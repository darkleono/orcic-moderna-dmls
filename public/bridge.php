<?php
/**
 * ORCIC BRIDGE GATEWAY
 * Permite que Astro (Modern) se comunique con MySQL usando PHP nativo del hosting.
 */

Header('Access-Control-Allow-Origin: *');
Header('Access-Control-Allow-Headers: Content-Type, X-ORCIC-TOKEN');
Header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
Header('Content-Type: application/json; charset=utf-8');

// Manejo de peticiones OPTIONS (CORS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// CONFIGURACIÓN (Extraída de tu .env)
$host = 'localhost';
$db   = 'gruporti_orcic';
$user = 'gruporti_orcic';
$pass = 'q9W3q$PKCyy.';
$charset = 'utf8mb4';

// SEGURIDAD: Token de Acceso
$secure_token = "ORCIC_BRIDGE_TOKEN_2026_X1";

// Verificar el Token en el Header
$provided_token = $_SERVER['HTTP_X_ORCIC_TOKEN'] ?? null;

if ($provided_token !== $secure_token) {
    http_response_code(401);
    echo json_encode(["status" => "error", "message" => "Acceso no autorizado (Token Inválido)"]);
    exit;
}

// CONECTAR A LA BASE DE DATOS
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
     $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
     http_response_code(500);
     echo json_encode(["status" => "error", "message" => "Error de conexión: " . $e->getMessage()]);
     exit;
}

// ENRUTADOR DE ACCIONES
$action = $_GET['action'] ?? 'read';

switch ($action) {
    case 'read':
        $stmt = $pdo->query("SELECT * FROM properties ORDER BY id DESC");
        $results = $stmt->fetchAll();
        echo json_encode($results);
        break;

    case 'save':
        if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
            http_response_code(405);
            echo json_encode(["status" => "error", "message" => "Método no permitido"]);
            exit;
        }

        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            echo json_encode(["status" => "error", "message" => "No se recibieron datos"]);
            exit;
        }

        // Ejemplo simple de guardado (esto se debe ajustar a tus columnas reales)
        // Por ahora simularemos el éxito
        echo json_encode(["status" => "success", "message" => "Datos recibidos correctamente", "data" => $input]);
        break;

    default:
        http_response_code(404);
        echo json_encode(["status" => "error", "message" => "Acción desconocida"]);
        break;
}
