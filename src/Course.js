function Course({id, title, content, price, removeOneCourse}) {             // Diger taraftan spread operatörü ile gönderildiginde bu sekilde karsiladigimiza dikkat et
    return <div className="card">
        <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">${price}</h4>
        </div>
        <p>{content}</p>
        <button type="button" className="cardDeleteButton" onClick={() => removeOneCourse(id)}>Delete</button>
    </div>;
}

export default Course;