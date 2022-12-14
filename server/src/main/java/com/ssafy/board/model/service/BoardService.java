package com.ssafy.board.model.service;

import java.util.List;
import java.util.Map;

import com.ssafy.board.model.BoardDto;

public interface BoardService {

	void writeArticle(BoardDto boardDto) throws Exception;
	List<BoardDto> listArticle(Map<String, String> map) throws Exception;
	BoardDto getArticle(int articleNo) throws Exception;
	void updateHit(int articleNo) throws Exception;
	void modifyArticle(BoardDto boardDto) throws Exception;
	void deleteArticle(int articleNo) throws Exception;
	int totalArticleCount(Map<String, String> map) throws Exception;
	// for pagination (page-link)
	List<BoardDto> selectBoardLimitOffset(int limit, int offset, String key, String word) throws Exception;
	int selectBoardTotalCount() throws Exception;
}
