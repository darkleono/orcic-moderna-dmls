/**
 * ORCIC API CLIENT (Astro Modern)
 * Centraliza la comunicación con el PHP Bridge.
 */

const isServer = typeof window === 'undefined';

// Automatizamos la URL: 
// En el servidor (Build) = Usa el dominio + carpeta del config.
// En el navegador = Usa solo la ruta relativa.
const API_URL = isServer 
    ? `${import.meta.env.SITE}${import.meta.env.BASE_URL}/bridge.php`.replace(/([^:]\/)\/+/g, "$1") 
    : `${import.meta.env.BASE_URL}/bridge.php`.replace(/\/+/g, '/');

const API_TOKEN = 'ORCIC_BRIDGE_TOKEN_2026_X1';

// Definición de Interfaces (Tipado)
export interface Property {
    id: number;
    code: string;
    name: string;
    description?: string;
    price: string;
    city: string;
    category: string;
    status: string;
    images?: string[];
}

/**
 * Obtener todas las propiedades
 */
export async function fetchProperties(): Promise<Property[]> {
    try {
        const response = await fetch(`${API_URL}?action=read`, {
            headers: {
                'X-ORCIC-TOKEN': API_TOKEN
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API Error [${response.status}]:`, errorText);
            throw new Error(`Error al conectar con el puente de datos (${response.status})`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Fetch Error:', error);
        return [];
    }
}

/**
 * Guardar o Actualizar una propiedad
 */
export async function saveProperty(data: Partial<Property>): Promise<{ status: string, message: string }> {
    try {
        const response = await fetch(`${API_URL}?action=save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-ORCIC-TOKEN': API_TOKEN
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) throw new Error('Error al guardar datos');
        
        return await response.json();
    } catch (error) {
        console.error('API Save Error:', error);
        return { status: 'error', message: 'No se pudo conectar con el servidor' };
    }
}
