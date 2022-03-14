const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const { resistance } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>My Workout Tracker</title>
                    {/* Milligram CSS for Some Default Styling */}
                    {/* Google Fonts */}
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
                    />

                    {/* CSS Reset */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
                    />

                    {/* Milligram CSS */}
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css"
                    />

                    {/* Jquery */}
                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossOrigin="anonymous"
                    ></script>

                    {/* OUR CSS AND JS */}
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
                    <link rel="stylesheet" href="/styles.css" />
                    <script src="/app.js" defer></script>
                </head>
                <body>
                    <header>
                        <h1>Workout Tracker App</h1>
                    </header>

                    <main>
                        {this.props.children}
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Add New Exercise</label>
                                <input type="text" class="form-control-lg" id="exampleFormControlInput1" placeholder="Exercise Name"></input>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Example select</label>
                                <select class="form-control-lg" id="exampleFormControlSelect1">
                                    <option>Arms</option>
                                    <option>Legs</option>
                                    <option>Core</option>
                                </select>
                            </div>
                            <div class="form-row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Total Number of Reps"></input>
                                </div>
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="Total Number of Sets"></input>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Notes</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button class="btn btn-primary btn-lg btn-info" type="submit">Submit Exercise</button>
                        </form>
                    </main>

                    <footer>

                    </footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout