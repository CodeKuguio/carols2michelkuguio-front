import {useEffect, useState} from "react";
import {intervalToDuration, parseISO} from "date-fns";
import {formatInTimeZone} from 'date-fns-tz'
import {TimeLeftProps} from "./index.tsx";
import {CountdownSectionProps} from "./time-left.types.tsx";

function formatToTwoDigits(value: number | undefined | null) {
    if (!value) {
        return "00";
    }
return String(value).padStart(2, "0");
}

export const useTimeLeft = (props: TimeLeftProps) => {
    const endDate = parseISO(props.targetDate);
    const [timeLeft, setTimeLeft] = useState<CountdownSectionProps>();

    useEffect(() => {
        const interval = setInterval(() => {
            const startDate = parseISO(formatInTimeZone((new Date()).toISOString(), 'America/Sao_Paulo', "yyyy-MM-dd'T'HH:mm:ss'Z'"));
            const interval = {
                start: startDate,
                end: endDate,
            };
            const duration = intervalToDuration(interval);
            setTimeLeft({
                months:formatToTwoDigits(duration.months),
                days:formatToTwoDigits(duration.days),
                hours:formatToTwoDigits(duration.hours),
                minutes:formatToTwoDigits(duration.minutes),
                seconds:formatToTwoDigits(duration.seconds),
                weeks:formatToTwoDigits(duration.weeks),
                years:formatToTwoDigits(duration.years),
            })
        }, 1000);

        return () => clearInterval(interval);
    }, [endDate]);

    return {timeLeft};
};