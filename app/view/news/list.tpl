<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
          <span>{{ item.source }}</span>
          <span>{{ helper.relativeTime(item.publish_time) }}</span>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>