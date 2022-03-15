const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { exercise } = this.props
        return (
            <DefaultLayout>
                <div>
                    <article>
                        <h3>
                            {exercise.name}
                        </h3>
                        <h3>{exercise.muscleGroup}</h3>
                        <a href={`/exercises/${exercise._id}/edit`}><button>Edit Entry</button></a>
                        <form action={`/exercises/${exercise._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete" />
                        </form>
                        <a href="/exercises/"><button>Back to Main</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show;