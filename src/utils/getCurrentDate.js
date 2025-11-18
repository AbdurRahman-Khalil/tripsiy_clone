const getCurrentDate = () => {
    const now = new Date();

    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const dateFormatter = new Intl.DateTimeFormat('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    const time = timeFormatter.format(now).replace('at ', '');

    const date = dateFormatter.format(now);

    const formattedDate = date.replace(/\//g, '-');
    
    return `${time}, ${formattedDate}`;
}

export default getCurrentDate;