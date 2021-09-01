import { Component } from "react";
import { Dropdown } from "react-bootstrap"
import { AiOutlineAlignLeft } from "react-icons/ai"
import { BsFillGridFill } from "react-icons/bs"
import "../styles.css"
class Header extends Component {
    render() {
        return (
            <div className="header__wrap">
                <div className='header__inner'>
                    <h2>TV Shows</h2>
                    <Dropdown >
                        <Dropdown.Toggle id="dropdown-basic" className='dropdown__h'>
                            Genres
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <div className='dropdown-col'>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Anime</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Asian</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">British</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">Comedies</Dropdown.Item>
                                <Dropdown.Item href="#/action-7">Crime</Dropdown.Item>
                                
                            </div>
                            <div className='dropdown-col'>
                                <Dropdown.Item href="#/action-8">Docuseries</Dropdown.Item>
                                <Dropdown.Item href="#/action-9">Dramas</Dropdown.Item>
                                <Dropdown.Item href="#/action-10">Historical TV Shows</Dropdown.Item>
                                <Dropdown.Item href="#/action-11">Horror</Dropdown.Item>
                                <Dropdown.Item href="#/action-12">Kids</Dropdown.Item>
                                <Dropdown.Item href="#/action-13">Mysteries</Dropdown.Item>
                                <Dropdown.Item href="#/action-14">Polish</Dropdown.Item>
                                
                            </div>
                            <div className='dropdown-col'>
                                <Dropdown.Item href="#/action-15">Reality & Talk</Dropdown.Item>
                                <Dropdown.Item href="#/action-16">Romance</Dropdown.Item>
                                <Dropdown.Item href="#/action-17">Sci-Fi & Fantasy</Dropdown.Item>
                                <Dropdown.Item href="#/action-18">Science & Nature</Dropdown.Item>
                                <Dropdown.Item href="#/action-19">Teen</Dropdown.Item>
                                <Dropdown.Item href="#/action-20">Thriller</Dropdown.Item>
                                <Dropdown.Item href="#/action-21">US</Dropdown.Item>
                            </div>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='header__inner'>
                    <AiOutlineAlignLeft className='h__icon' />
                    <BsFillGridFill className='h__icon' />
                </div>
            </div>
        );
    }
}

export default Header