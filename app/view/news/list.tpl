<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.name }}</a>
          <span>{{ item.artists[0].name }}</span>
          <span>{{ helper.relativeTime(item.album.publishTime) }}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>