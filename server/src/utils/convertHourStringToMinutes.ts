/**
 * Recebe horas em string (Ex: 12:00) e converte para minutos 
 * 
 * @param hourString 
 */

export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}