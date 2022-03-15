const React = require('react');
const DefaultLayout = require('../Default');

class Edit extends React.Component {
    render() {
        const exercise = this.props.exercise;
        return (

            <DefaultLayout>
                <div>
                    <form action={`/exercises/${exercise._id}?_method=PUT`} method="post">
                        <fieldset>
                            <legend>Edit {exercise.name}</legend>
                            <label>
                                NAME:<input
                                    type="text"
                                    name="name"
                                    placeholder="enter exercise name"
                                    value={exercise.name}
                                />
                            </label>
                            <label>
                                Muscle Group:<input
                                    type="text"
                                    name="muscleGroup"
                                    placeholder="enter targeted muscle group"
                                    value={exercise.muscleGroup}
                                />
                            </label>
                            <label>
                                TOTAL REPS:<input
                                    type="text"
                                    name="Reps"
                                    placeholder="enter targeted muscle group"
                                    value={exercise.reps}
                                />
                            </label>
                            <label>
                                TOTAL SETS:<input
                                    type="text"
                                    name="total sets"
                                    placeholder="Total sets"
                                    value={exercise.sets}
                                />
                            </label>
                        </fieldset>
                        <input type="submit" value={`Edit ${exercise.name}`} />
                    </form>
                </div>
            </DefaultLayout>

        )
    }
}

module.exports = Edit;