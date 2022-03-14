const React = require('react');

class Show extends React.Component {
    render() {
        const { resistances } = this.props
        return (
            <div>
                <article>
                    <h2>
                        {resistances.name}
                    </h2>
                    <h3>{resistances.muscleGroup}</h3>
                    <a href={`/resistance/${resistances._id}/Edit`}><button>Edit</button></a>
                    <form action={`/resistance/${resistances._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>
                    <a href="/resistance/"><button>Back to Main</button></a>
                </article>
            </div>
        )
    }
}

module.exports = Show;