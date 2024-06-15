import PropTyes from 'prop-types'

function Student(props){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Sudent : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )   
}

Student.propTypes = {
    name: PropTyes.string,
    age: PropTyes.number,
    isStudent: PropTyes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student