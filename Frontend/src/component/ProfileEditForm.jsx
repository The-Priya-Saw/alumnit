import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import "./ProfileEditForm.css";
import { useContext } from "react";
import CurrentUserContext from "../context/LoggedInUser/CurrentUserContext";


const ProfileEditForm = (props) => {
    const { state, setState } = useContext(CurrentUserContext);
    return (


        <div class="ProfileEditForm container rounded bg-white mt-5" style={{
            maxWidth: "500px"
        }}>
            <a className="close bi bi-x-square" style={{ textAlign: "end" }} onClick={props.close}>
            </a>
            <div class="row">
                <div class="col-md border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <input type="file" class="form-control"></input>
                        <img class="rounded-circle mt-5" src={state.User.ProfilePicture} width="90"></img>
                        <input type="text" class="form-control" placeholder="Enter your Full Name"></input>
                        <input type="text" class="form-control" placeholder="Enter title"></input>
                    </div>
                    <div class="col-md">
                        <div class="px-3">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div class="d-flex flex-row align-items-center back"><i class="fa fa-long-arrow-left mr-1 mb-1"></i>

                                </div>

                            </div>


                            <div class="row mt-2">

                                <h4>Education</h4><br />
                                <input type="text" class="form-control" placeholder="Institute Name" value="" />
                                <input type="text" class="form-control" placeholder="Course Name" value="" />
                                <input type="text" class="form-control" placeholder="Passing year" value="" />
                            </div>

                            <div class="row mt-2">

                                <h4>Linkedln profile link</h4><br />
                                <input type="text" class="form-control" placeholder="Enter the url" value="" />
                            </div>


                            <div class="row mt-2">

                                <h4>Github Profile link</h4><br />
                                <input type="text" class="form-control" placeholder="Enter the url" value="" />
                            </div>



                        </div>
                    </div>

                </div>


                <div class="mt-2 mb-2 text-right"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>

    );

}
export default ProfileEditForm;