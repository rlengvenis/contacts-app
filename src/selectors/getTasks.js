const getTasks = (state) => {
  return Object.keys(state.tasks).map((taskId) => state.tasks[taskId]);
};

export default getTasks;
