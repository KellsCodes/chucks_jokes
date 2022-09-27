Steps:
1. Create a reusable component for the following components
a) Cards/Joke cards
b) Category/category btn
c) Top quotes(does not exist on the api)
d) Display quotes
e) Navigation btn
f) Search bar
g) Footer

2. Create color paletes for the required colors

3. Create base font-size and options

4. Split the styling files into partials for easy management/maintenance

---Layout----
1. Display all the categories on the top of the page. The categories are dynamic and dynamically rendered for future changes
2. Each category btn fetches random joke on that category and the joke is rendered on the page
3. The rendered joke category is displayed at the top left to enable user know the current category they are acessing the jokes
4. A search bar on the hero section to search for jokes in any category

----Logic----
1. When a user clicks on a category, the category should be able to fetch a random quote and display to the user.
2. When a user makes a query, if the query is not successful, display the query + "not found" to the user to let him know the status of the query made
3. If the query is successful, display the query in cards, paginated by 50

References:
scss structuring: https://dev.to/gedalyakrycer/ohsnap-sass-folder-structure-for-react-483e
webpack config with react and scss: https://www.youtube.com/watch?v=WDpxqopXd9U
font use from local system: https://www.pagecloud.com/blog/how-to-add-custom-fonts-to-any-website