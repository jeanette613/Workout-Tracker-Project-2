const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const exercises = this.props.exercises;
        return (
            // In the render of your class
            <DefaultLayout title={'Exercise Index Page'}>
                <nav>
                    <a href='/exercises/new'>Add New Exercise</a>
                </nav>
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
            </DefaultLayout>
        )
    }
}

module.exports = Index;