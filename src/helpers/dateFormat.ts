export const reformatDate = (dateStr: string) =>
{
    const dArr = dateStr.split("-");  //"2010-01-18"
    return dArr[2]+ "-" +dArr[1]+ "-" +dArr[0]; //"18/01/10"
}