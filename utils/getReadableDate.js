export const getAbsoluteDate = (date) => {
    let dateObj = new Date(date); // Renamed variable to avoid conflict with parameter
    return dateObj.toLocaleString('en-US', { dateStyle: 'medium' });
}

export const getRelativeDate = (date) => {
    let current = Math.floor(new Date().getTime() / 1000);
    let posted = Math.floor(new Date(date).getTime() / 1000);
    let diff = current - posted;

    if (diff < 86400) {
        // Less than a day has passed:
        return 'Today';
    } else if (diff < 2628000) {
        // Less than a month has passed:
        return `${Math.floor(diff / 86400)}d`;
    } else if (diff < 31536000) {
        // Less than a year has passed:
        return `${Math.floor(diff / 2628000)}m`;
    } else {
        // More than a year has passed:
        return `${Math.floor(diff / 31536000)}y`;
    }
}