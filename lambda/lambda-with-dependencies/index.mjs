import { format, formatDistance, formatRelative, subDays } from 'date-fns'


export const handler = async (event) => {

    console.log(format(new Date(), "'Today is a' eeee"))
    //=> "Today is a Friday"

    console.log(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }))
    //=> "3 days ago"

    console.log(formatRelative(subDays(new Date(), 3), new Date()))
};