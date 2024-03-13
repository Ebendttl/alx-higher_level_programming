-- A script that lists all shows contained in hbtn_0d_tvshows without a genre linked.
-- No genre
SELECT h.title, s.genre_id
FROM hbtn_0d_tvshows h
LEFT JOIN hbtn_0d_tvshows s ON h.title = s.title
WHERE s.genre_id IS NULL
GROUP BY h.title, s.genre_id
ORDER BY h.title ASC;

