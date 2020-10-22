import React, { Component } from "react"
import { Button } from "react-bootstrap"
import checked from "../SVG/checked.svg"
import unchecked from "../SVG/not-checked.svg"
import { bindActionCreators } from "redux"
import "../Styles/home.css"
import { connect } from "react-redux"
import { addTask, removeTask, addDoneTask, sortToDoTasks, sortDoneTasks } from "../Actions/Actions"

class Home extends Component {
    state = {
        err: ""
    }
    addTask = (event) => {
        event.preventDefault()
        let task = event.target[0].value
        let { err } = this.state
        if (task.length == 0)
            err = "Please enter the task to be added"
        else if (task.length > 20)
            err = "Must be 20 characters or less"
        else {
            err = ""
            this.props.addTask(task)
        }
        this.setState({ err })
    }
    taskHandler = (index, task) => {
        this.props.removeTask(index)
        this.props.addDoneTask(task)
    }
    sortList = () => {
        this.props.sortToDoTasks()
        this.props.sortDoneTasks()
    }
    render() {
        const { err } = this.state
        const { tasks, completedTasks } = this.props
        return (
            <div className="home">
                <div className="container">
                    <div className="heading">
                        Tasks
                    </div>
                    <div className="form-container">
                        <form onSubmit={this.addTask}>
                            <div>
                                <input type="text" placeholder=" Add a task " />                                
                            </div>
                            <Button variant="primary" type="submit">Add</Button>
                            <Button variant="primary" onClick={this.sortList}>Sort</Button>
                        </form>
                        {err.length > 0 && <div className="errmsg">{err}</div>}
                    </div>
                    <div className="display">
                        <div className="list">
                            <h4>To-do</h4>
                            {tasks.map((task, i) => {
                                return (
                                    <div className="todotask" >
                                        <img onClick={() => this.taskHandler(i, task)} src={unchecked} alt="unchecked logo" />
                                        <span>{task}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="list">
                            <h4>Completed</h4>
                            {completedTasks.map((task, i) => {
                                return (
                                    <div className="completedtask" >
                                        <img src={checked} alt="checked logo" />
                                        <span>{task}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        tasks: store.tasks,
        completedTasks: store.completedTasks
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        { addTask, removeTask, addDoneTask, sortToDoTasks, sortDoneTasks }, dispatch
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)