export function generateRandomId() {
	let time = new Date().getTime();
	return time.toString();
}