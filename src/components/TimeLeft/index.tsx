import * as React from "react";
import {useTimeLeft} from "./time-left.controller.tsx";
import {ColumnProps, TimeLeftProps} from "./time-left.types.tsx";
import {CountdownSection, CountdownWrapper, Divider, Title} from "./time-left.styles.tsx";


const Column: React.FC<ColumnProps> = ({name, number}) => {
    return (
        <CountdownSection>
            <div className="number">{number}</div>
            <div className="text">{name}</div>
        </CountdownSection>
    )
}

export const TimeLeft: React.FC<TimeLeftProps> = ({targetDate}) => {
    const {timeLeft} = useTimeLeft({targetDate})
    return (
        <>
            <Title>Estamos casados por</Title>
            <CountdownWrapper>
                {!!timeLeft && (
                    <>
                        <Column number={timeLeft.months} name={'Meses'} />
                        <Divider/>
                        <Column number={timeLeft.days} name={'Dias'} />
                        <Divider/>
                        <Column number={timeLeft.hours} name={'Horas'} />
                        <Divider/>
                        <Column number={timeLeft.minutes} name={'Minutos'} />
                        <Divider/>
                        <Column number={timeLeft.seconds} name={'Segundos'} />
                    </>
                )}
            </CountdownWrapper>
        </>
    );
};
