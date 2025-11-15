import fullStar from "../../assets/svgs/packages/star.svg";
import halfStar from "../../assets/svgs/packages/half_star.svg";


export const RenderStars = ({ rating, className }) => {
    const stars = [];
    let remaining = rating;

    for (let i = 0; i < 5; i++) {
        if (remaining >= 1) {
            stars.push(<img key={i} src={fullStar} alt="full star" />);
            remaining -= 1;
        } else if (remaining >= 0.5) {
            stars.push(<img key={i} src={halfStar} alt="half star" />);
            remaining -= 0.5;
        }
    }

    return (
        <div className={className}>
            {stars}
        </div>
    );
};



//  else {
//     stars.push(<img key={i} src={emptyStar} alt="empty star" />);
// }

