/**
 * Utility functions for formatting dates consistently throughout the application
 */

/**
 * Format date for display in Thai locale with standard format
 * @param date - Date object to format
 * @returns Formatted date string in Thai locale (DD/MM/YYYY HH:MM:SS)
 */
export function formatDateTimeForDisplay(date: Date): string {
    return date.toLocaleString('th-TH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

/**
 * Format date only (without time) for display in Thai locale
 * @param date - Date object to format
 * @returns Formatted date string in Thai locale (DD/MM/YYYY)
 */
export function formatDateForDisplay(date: Date): string {
    return date.toLocaleDateString('th-TH', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

/**
 * Format date for database operations or API calls
 * @param date - Date object to format
 * @returns ISO string format (YYYY-MM-DDTHH:mm:ss.sssZ)
 */
export function formatDateForDatabase(date: Date): string {
    return date.toISOString();
}

/**
 * Format date with Thai Buddhist Era
 * @param date - Date object to format
 * @returns Formatted date string with Thai Buddhist Era (DD/MM/BBBB)
 */
export function formatDateWithBuddhistEra(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        calendar: 'buddhist'
    };
    return date.toLocaleDateString('th-TH-u-ca-buddhist', options);
}

/**
 * Format date and time with Thai Buddhist Era
 * @param date - Date object to format
 * @returns Formatted date and time string with Thai Buddhist Era (DD/MM/BBBB HH:MM:SS)
 */
export function formatDateTimeWithBuddhistEra(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        calendar: 'buddhist'
    };
    return date.toLocaleDateString('th-TH-u-ca-buddhist', options);
}
