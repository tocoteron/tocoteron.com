package handler

import (
	"net/http"
	"strconv"

	"github.com/labstack/echo/v4"
	"tocoteron.com/blog/model"
)

func GetPostsHandler(c echo.Context) error {
	mock := []model.Post{}

	return c.JSON(http.StatusOK, mock)
}

func GetPostHandler(c echo.Context) error {
	paramID := c.Param("id")

	id, err := strconv.ParseInt(paramID, 10, 64)
	if err != nil {
		return echo.NewHTTPError(
			http.StatusBadRequest,
			"Post id is a number",
		)
	}

	mock := model.Post{
		ID:        id,
		Content:   "string",
		CreatedAt: "2021-06-16T00:00:00.000Z",
		UpdatedAt: "2021-06-16T00:00:00.000Z",
	}

	return c.JSON(http.StatusOK, mock)
}
