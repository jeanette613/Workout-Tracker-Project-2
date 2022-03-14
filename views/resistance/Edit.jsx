const React = require('react');
const DefaultLayout = require('../Default');

class Edit extends React.Component {
    render() {
        const { resistances } = this.props
        return (

            <DefaultLayout>
                <div>
                    <form action={`/resistance/${resistances._id}?_method=PUT`} method="post">
                        <fieldset>
                            <legend>Edit {resistances.name}</legend>
                            <label>
                                NAME:<input
                                    type="text"
                                    name="name"
                                    placeholder="enter exercise name"
                                    value={resistances.name}
                                />
                            </label>
                            <label>
                                COLOR:<input
                                    type="text"
                                    name="color"
                                    placeholder="enter fruit name"
                                    value={resistances.muscleGroup}
                                />
                            </label>
                            <label>
                                READY TO EAT:{this.props.fruit.readyToEat ? <input type="checkbox" name="readyToEat" defaultChecked /> : <input type="checkbox" name="readyToEat" />}
                            </label>
                        </fieldset>
                        <input type="submit" value={`Edit ${resistances.name}`} />
                    </form>
                </div>
            </DefaultLayout>

        )
    }
}

module.exports = Edit;