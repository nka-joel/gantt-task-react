import React from "react"
import { ViewMode, Task, Gantt } from "gantt-task-react"
import { ViewSwitcher } from "./components/view-switcher"
import { getStartEndDateForProject, initTasks, initTasks2 } from "./helper"
import { TaskListTable } from './components/task-list-table'
import { TaskListHeader } from './components/task-list-header'
import { TooltipContent } from './components/tooltip-content'
import { Calendar } from './components/calendar'

import "gantt-task-react/dist/index.css";

// Init
const App = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState<Task[]>(initTasks());
  const tasks2 = initTasks2();
  const [isChecked, setIsChecked] = React.useState(true);
  let columnWidth = 65;
  if (view === ViewMode.Year) {
    columnWidth = 350;
  } else if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const handleTaskChange = (task: Task) => {
    let newTasks = tasks.map(t => (t.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map(t =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    setTasks(newTasks);
  };

  const handleTaskDelete = (task: Task) => {
    const conf = window.confirm("Are you sure about " + task.name + " ?");
    if (conf) {
      setTasks(tasks.filter(t => t.id !== task.id));
    }
    return conf;
  };

  const handleProgressChange = async (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  };

  const handleDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const handleClick = (task: Task) => {
    console.log("On Click event Id:" + task.id);
  };

  const handleSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  const handleExpanderClick = (task: Task) => {
    setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    console.log("On expander click Id:" + task.id);
  };

  return (
    <div className="Wrapper">
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <h3>Gantt With Unlimited Height</h3>
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <Gantt locale='pt'
=======
<<<<<<< HEAD
>>>>>>> fd6789638e9a8ce8a8832accf442d716683c27d9
      <Gantt
>>>>>>> 03e80b594b1b05f25d21761148886a5361951f13
        tasks={tasks}
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
<<<<<<< HEAD
        TaskListTable={TaskListTable}
        TaskListHeader={TaskListHeader}
        TooltipContent={TooltipContent}
        Calendar={Calendar}
      />
=======
      />
      <h3>Gantt With Limited Height</h3> 
      <Gantt
        tasks={tasks}
<<<<<<< HEAD
=======
=======

>>>>>>> 03e80b594b1b05f25d21761148886a5361951f13
      
      <Gantt locale='pt'
        tasks={tasks2}
>>>>>>> a33e7ee5c9be2ba935fdf2fe57b6133a87e137e2
>>>>>>> fd6789638e9a8ce8a8832accf442d716683c27d9
        viewMode={view}
        onDateChange={handleTaskChange}
        onDelete={handleTaskDelete}
        onProgressChange={handleProgressChange}
        onDoubleClick={handleDblClick}
        onClick={handleClick}
        onSelect={handleSelect}
        onExpanderClick={handleExpanderClick}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
        TaskListTable={TaskListTable}
        TaskListHeader={TaskListHeader}
        TooltipContent={TooltipContent}
        Calendar={Calendar}
      />

    </div>
    
  );
};

export default App;
