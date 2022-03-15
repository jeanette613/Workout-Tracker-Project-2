const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const exercises = this.props.exercises;
        return (
            // In the render of your class
            <DefaultLayout title={'Exercise Index Page'}>

                <div>
                    {
                        exercises.map((exercise) => (
                            <article>
                                <a href={`/exercises/${exercise._id}`}>
                                    <h2>
                                        {exercise.name} - {exercise.muscleGroup}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
                <div>
                    <a href='/exercises/New'><button>Add New Exercise Type</button></a>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;