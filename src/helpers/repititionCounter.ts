import { INew } from '../interfaces/news';

export const repititionCounterSource = (arr: INew[]) => {
    return arr.reduce((acc: any, currentValue: any) => {
        currentValue.count = 1;
        const exists: any = acc.find((item: any) => item.source.name === currentValue.source.name);
        
        exists ? exists.count++ : acc.push(currentValue);

        return acc;
    }, []);
}

export const repititionCounterAuthor = (arr: INew[]) => {
    return arr.reduce((acc: any, currentValue: any) => {
        currentValue.count = 1;
        const exists: any = acc.find((item: any) => item.author === currentValue.author);
        
        exists ? exists.count++ : acc.push(currentValue);
        
        return acc;
    }, []);
}

export const repititionCounterDate = (arr: INew[]) => {
    return arr.reduce((acc: any, currentValue: any) => {
        currentValue.count = 1;
        const exists: any = acc.find((item: any) => item.publishedAt === currentValue.publishedAt);
        
        exists ? exists.count++ : acc.push(currentValue);
        
        return acc;
    }, []);
}

