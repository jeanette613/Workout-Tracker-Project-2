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
                                COLOR:<input
                                    type="text"
                                    name="color"
                                    placeholder="enter fruit name"
                                    value={exercise.muscleGroup}
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