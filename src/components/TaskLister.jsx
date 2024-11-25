import PropTypes from "prop-types";

export function TaskLister(props) {
    return <ol className="list-decimal text-left">
        {props.tasks.map((task, index) => (<li key={index}>{task.title}</li>))}
    </ol>;
}

TaskLister.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.any),
};
