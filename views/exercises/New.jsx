const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/exercises" method="post">
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

            </DefaultLayout>
        )
    }
}

module.exports = New;