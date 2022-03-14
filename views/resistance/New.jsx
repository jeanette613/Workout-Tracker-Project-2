const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component {
    render() {
        const { resistances } = this.props
        return (
            <DefaultLayout>
                <form action="/resistance" method="post">
                    <fieldset>
                        <legend>Add New Exercise</legend>
                        <label>
                            NAME:<input type="text" name="name" placeholder="enter exercise name" />
                        </label>
                        <label>
                            COLOR:<input type="text" name="color" placeholder="enter exercise name" />
                        </label>
                    </fieldset>
                    <input type="submit" value="create New exercise Entry" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;