export const navBarModule = (() => {
  const nav = document.querySelector("nav");

  const createNavListItem = (itemObject) => {
    const text = itemObject.itemText;
    const className = itemObject.itemClassName;
    const link = itemObject.itemLink;
    const linkClassName = itemObject.itemLinkClassName;
    const iconSrc = itemObject.itemIconSrc;
    const iconAlt = itemObject.iconAltText;

    const item = document.createElement("li");
    item.classList.add(className);

    const itemLink = document.createElement("a");
    itemLink.href = link;
    itemLink.classList.add(linkClassName);

    const itemLeftSideContent = document.createElement("div");
    itemLeftSideContent.classList.add("nav-a-leftSide");

    const itemIcon = document.createElement("img");
    itemIcon.src = iconSrc;
    itemIcon.alt = iconAlt;

    const itemText = document.createElement("div");
    itemText.classList.add("nav-li-text");
    itemText.textContent = text;

    const todoCounter = document.createElement("div");
    todoCounter.classList.add("nav-todo-counter");

    itemLeftSideContent.appendChild(itemIcon);
    itemLeftSideContent.appendChild(itemText);
    itemLink.appendChild(itemLeftSideContent);
    itemLink.appendChild(todoCounter);
    item.appendChild(itemLink);

    return item;
  };

  const createNavList = (listClassName) => {
    const navList = document.createElement("ul");
    navList.classList.add(listClassName);

    return navList;
  };

  const renderNav = (propertyObject) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const [listName, itemList] of Object.entries(propertyObject)) {
      const list = createNavList(listName);
      itemList.forEach((item) => {
        list.appendChild(createNavListItem(item));
      });

      nav.appendChild(list);
    }
  };

  return { renderNav };
})();

export const someotherthing = "hello";
