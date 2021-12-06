import {ProductProps} from "./Product.props";
import {Card} from "../Card/Card";
import styles from './Product.module.css';
import {Rating} from "../Rating/Rating";
import {Tag} from "../Tag/Tag";
import {Button, Devider} from "..";
import {devlOfNum, priceRu} from "../../helpers/helpers";

export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {

    return (
       <Card className={styles.product}>
           <div className={styles.logo}><img src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`} alt={product.title}/></div>
           <div className={styles.title}>{product.title}</div>
           <div className={styles.price}>
               {priceRu(product.price)}
               {product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceRu(product.price - product.oldPrice)}</Tag>}
           </div>
           <div className={styles.credit}>
               {priceRu(product.credit)}/<span className={styles.month}>месяцы</span>
           </div>
           <div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}/></div>
           <div className={styles.tags}>{product.categories.map(c => <Tag className={styles.category} key={c} color='ghost'>{c}</Tag>)}</div>
           <div className={styles.priceTitle}>цена</div>
           <div className={styles.creditTitle}>кредит</div>
           <Devider className={styles.hr}/>
           <div className={styles.rateTitle}>{product.reviewCount} {devlOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</div>
           <div className={styles.description}>{product.description} отзывов</div>
           <div className={styles.feature}>
                  {product.characteristics.map(c => (
                      <div className={styles.characteristics} key={c.name}>
                             <span className={styles.characteristicsName}>{c.name}</span>
                             <span className={styles.characteristicsDots}/>
                             <span className={styles.characteristicsValue}>{c.value}</span>
                      </div>
                  ))}
           </div>
           <div className={styles.advBlock}>
               {product.advantages && <div className={styles.advantages}>
                   <div className={styles.advTitle}>Преимущества</div>
                   <div>{product.advantages}</div>
               </div>}
               {product.disadvantages && <div className={styles.disadvantages}>
                   <div className={styles.advTitle}>Недостатки</div>
                   <div>{product.disadvantages}</div>
               </div>}
           </div>
           <Devider className={styles.hr}/>
           <div className={styles.actions}>
               <Button appearance='primary'>Читать отзывы</Button>
               <Button appearance='ghost' arrow='right' className={styles.reviewButton}>Читать отзывы</Button>
           </div>
       </Card>
    );
};