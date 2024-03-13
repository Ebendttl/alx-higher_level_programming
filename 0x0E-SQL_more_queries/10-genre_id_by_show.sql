-- A script that lists all shows contained in hbtn_0d_tvshows that have at least one genre linked.
-- Genre ID by show
SELECT DISTINCT tv_shows.title, tv_show_genres.genre_id
FROM tv_shows
JOIN tv_show_genres ON tv_shows.id = tv_show_genres.show_id
ORDER BY tv_shows.title ASC, tv_show_genres.genre_id ASC;
SELECT DISTINCT h.title, s.genre_id
FROM hbtn_0d_tvshows h
JOIN hbtn_0d_tvshows s ON h.title = s.title
ORDER BY h.title ASC, s.genre_id ASC;

