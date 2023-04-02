import { createContext, useState } from 'react';
import { ListAutos } from '../listAutos/ListAutos';

export const MyContext = createContext<FormatDatas>({
    cardsFormat: false,
    tableFormat: false,
    handleFormat: () => {},
});

export interface ClickEvent extends React.MouseEvent<HTMLDivElement> {
    target: HTMLDivElement;
}

export interface FormatDatas {
    cardsFormat: boolean;
    tableFormat: boolean;
    handleFormat: (e: ClickEvent) => void;
}

const Home = (): JSX.Element => {
    const [cardsFormat, setCardsFormat] = useState(true);
    const [tableFormat, setTableFormat] = useState(false);

    const handleFormat = (e: ClickEvent): void => {
        if (e.target.dataset.format === 'cards' && cardsFormat !== true) {
            setCardsFormat(!cardsFormat);
            setTableFormat(!tableFormat);
        } else if (
            e.target.dataset.format === 'table' &&
            tableFormat !== true
        ) {
            setCardsFormat(!cardsFormat);
            setTableFormat(!tableFormat);
        }
    };

    const listFormatDatas: FormatDatas = {
        cardsFormat,
        tableFormat,
        handleFormat,
    };

    return (
        <div>
            <MyContext.Provider value={listFormatDatas}>
                <ListAutos />
            </MyContext.Provider>
        </div>
    );
};

export default Home;
