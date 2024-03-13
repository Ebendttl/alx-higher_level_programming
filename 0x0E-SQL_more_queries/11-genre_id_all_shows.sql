-- A script that lists all shows contained in the database hbtn_0d_tvshows.
-- Genre ID for all shows
SELECT h.title, s.genre_id
FROM hbtn_0d_tvshows h
LEFT JOIN hbtn_0d_tvshows s ON h.title = s.title
ORDER BY h.title ASC, s.genre_id ASC;

