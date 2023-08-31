import Course from "./Course";

function Courses ({courses, removeCourse}) {


    
    return <div className="courseMainDiv">
        <div>
            <h1>My Courses</h1>
        </div>
        <div className="cardDiv">
            {
                courses.map((item) => {
                    return (
                        <Course {...item} key={item.id} removeOneCourse = {removeCourse}/>       //Burada course = {item} seklinde de yazabilirdik        
                    )
                })
            }
        </div>
        <footer>
            <h2>
                Total Price: $<span className = "totalPrice">{
                    courses.map((item)=> item.price).reduce((total, current) => {
                        return total + current;
                    }, 0)

                }</span>
            </h2>
        </footer>
    </div>;
}

export default Courses;