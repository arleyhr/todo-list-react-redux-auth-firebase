import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import SuccessIcon from 'material-ui/svg-icons/action/assignment-turned-in'
import LateIcon from 'material-ui/svg-icons/action/assignment-late'
import ToDoList from './ToDoList'

const ToDoTabs = props => (
  <div>
    <Tabs
      onChange={props.handleTabChange}
      value={props.indexTab}
    >
      <Tab
        icon={<LateIcon />}
        label={`Sin Completar (${props.incompleteToDos.length})`}
        value={0}
      />
      <Tab
        icon={<SuccessIcon />}
        label={`Completados (${props.successToDos.length})`}
        value={1}
      />
    </Tabs>
    <SwipeableViews
      index={props.indexTab}
      onChangeIndex={props.handleTabChange}
    >
      <div>
        <ToDoList
          todos={props.incompleteToDos}
          editMode={props.editMode}
          onChange={props.onChange}
          deleteItem={props.deleteItem}
        />
      </div>
      <div>
        <ToDoList
          todos={props.successToDos}
          editMode={props.editMode}
          onChange={props.onChange}
          deleteItem={props.deleteItem}
        />
      </div>
    </SwipeableViews>
  </div>
)

ToDoTabs.defaultProps = {
  indexTab: 0,
  editMode: false
}

ToDoTabs.propTypes = {
  successToDos: PropTypes.array,
  incompleteToDos: PropTypes.array,
  indexTab: PropTypes.number,
  handleTabChange: PropTypes.func,
  editMode: PropTypes.bool,
  deleteItem: PropTypes.func,
  onChange: PropTypes.func
}

export default ToDoTabs
