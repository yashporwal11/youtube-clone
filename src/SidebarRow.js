import React from "react";
import ReactTooltip from "react-tooltip";

function SidebarRow(props) {
  return (
    <>
      <ReactTooltip
        place="bottom"
        type="info"
        delayShow={500}
        backgroundColor="gray"
        borderColor="black"
      />
      <div
        data-tip={props.title}
        className={`sidebarRow ${props.selected && "selected"} ${
          props.visible && "active"
        }`}
      >
        <props.icon className="sidebarRowIcon" />
        <h2 className={`sidebarRowTitle ${props.visible && "active"}`}>
          {props.title}
        </h2>
      </div>
    </>
  );
}

export default SidebarRow;
