import React from 'react';
import '../style.css';
import axios from 'axios';
import Header from './Header';


// Need to redirect to Event Feed or clear inputs after submit

class CreateEventComponent extends React.Component {

    onSubmit = (e) => {
        e.preventDefault();

        let title = e.target.elements.title.value;
        let location = e.target.elements.location.value;
        let description = e.target.elements.description.value;

        let data = {
            "title": title,
            "location": location,
            "description": description
        }

        let self = this;
        axios.post('/createEvent', data).then(function(response) {
            console.log("response: " + response.data);
            /*alert(response.data.title);*/
            /*self.props.history.push('/');*/
            window.location.reload(true);
        }).catch(function(err) {
            console.log("error: " + err);
        })
    }
    

    render() {
        return (
            <div className="last_section_container">
                <div className="create_event_component_container">
                    
                    <h2>Create Event</h2>
                    <div className="cec_form">
                        
                        <form className="form" onSubmit={this.onSubmit}>
                            <div className="cec_form_inputs_container">
                                <div>
                                    <div><label>Title</label></div>
                                    <input name="title" placeholder="Enter a title" autocomplete="off"></input>
                                </div>
                                <div>
                                    <div><label>Location</label></div>
                                    <input name="location" placeholder="Enter a location" autocomplete="off"></input>
                                </div>
                                <div>
                                    <div><label>Description</label></div>
                                    <textarea style={{width: "250px", border: "1px lightgray solid"}}name="description" placeholder="Description" autocomplete="off"></textarea>
                                </div>
                                <div className="form_button_container">
                                    <button>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEventComponent;