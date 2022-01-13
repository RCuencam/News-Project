import { Card } from 'react-bootstrap';
import { INew } from '../interfaces/news';

type NewsItemProps = {
    item: INew,
    index: number
}

export const NewsItem = ({ item, index }: NewsItemProps): JSX.Element => {
    return(
        <Card className="col-12 col-lg-3 p-0 m-3 h-auto" key={ index }>
            <Card.Img 
            variant="top" 
            src={ item.urlToImage || "https://i.ibb.co/86XFMVn/Imagen-no-disponible-svg.png" } 
            style={{ height: "200px", objectFit:"cover" }}
            />

            <div className="p-3">
                <Card.Title><p>{ item.title }</p></Card.Title>
                <Card.Text>
                    { item.description || "Descripción no disponible." } <br />
                </Card.Text>
            </div>
        </Card>
    )
}