const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { resistance } = this.props;
        return (
            // In the render of your class
            <DefaultLayout>
                <div>
                    {
                        resistance.map((resistances) => (
                            <article>
                                <a href={`/resistance/${resistances._id}`}>
                                    <h2>
                                        {resistances.name} - {resistances.sets}
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