/**
 * Hook using Control Props Pattern, Custom Hook Pattern
 * and Props Getter Pattern
 */
import { useState } from "react";

//Function which concat all functions together
const callFnsInSequence =
  (...fns) =>
  (...args) =>
    fns.forEach((fn) => fn && fn(...args));

const useTabs = ({ activeTabId, tabCount, maxTabCount }) => {
  const [_activeTabId, set_activeTabId] = useState(activeTabId);
  const [_tabCount, set_tabCount] = useState(tabCount ?? 0);

  const addTab = () => set_tabCount((prevTabCount) => prevTabCount++);
  const delTab = () => set_tabCount((prevTabCount) => prevTabCount--);
  const nextTab = () => set_activeTabId((prevTabId) => prevTabId++);
  const prevTab = () => set_activeTabId((prevTabId) => prevTabId--);
  const setActiveTab = (tabId) => set_activeTabId(tabId);

  const getNextTabProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(nextTab, onClick),
    disabled: _activeTabId + 1 >= _tabCount,
    otherProps,
  });

  const getPrevTabProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(prevTab, onClick),
    disabled: _activeTabId + 1 === _tabCount,
    otherProps,
  });

  const getAddTabProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(addTab, onClick),
    disabled: _tabCount + 1 >= maxTabCount,
    ...otherProps,
  });

  const getDelTabProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(delTab, onClick),
    disabled: _tabCount - 1 <= 0,
    ...otherProps,
  });

  const getSetActiveTabProps = ({ onClick, ...otherProps } = {}) => ({
    onClick: callFnsInSequence(setActiveTab, onClick),
    disabled: _tabCount === 0,
    ...otherProps,
  });

  return {
    //  Properties
    activeTabId: _activeTabId,
    tabCount: _tabCount,
    //  Methods
    addTab,
    delTab,
    nextTab,
    prevTab,
    setActiveTab,
    //  Props Getter Methods
    getSetActiveTabProps,
    getNextTabProps,
    getPrevTabProps,
    getAddTabProps,
    getDelTabProps,
  };
};

export default useTabs;
